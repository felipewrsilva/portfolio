/**
 * Updates GitHub profile + portfolio repo description to match the current CV.
 * Requires: gh auth login (scopes: user, public_repo or repo)
 *
 * Usage: node scripts/update-github-profile.mjs
 *    or: gh api ... (this script shells out to gh)
 */
import { spawnSync } from 'node:child_process'

const GH = process.env.GH_PATH || 'C:\\Program Files\\GitHub CLI\\gh.exe'

const profile = {
  name: 'Felipe Silva',
  bio: 'Software Engineer in Madrid · Backend · Cloud · Distributed Systems. 10+ years modernizing platforms across healthcare, education, enterprise security and SaaS.',
  blog: 'https://felipewrsilva.dev',
  location: 'Madrid, Spain',
  hireable: true,
}

const portfolioDescription =
  'Software Engineer portfolio — backend, cloud and distributed systems.'

function gh(args, input) {
  const result = spawnSync(GH, args, {
    input,
    encoding: 'utf8',
    shell: false,
  })
  if (result.status !== 0) {
    const err = (result.stderr || result.stdout || '').trim()
    throw new Error(err || `gh ${args.join(' ')} failed`)
  }
  return (result.stdout || '').trim()
}

function main() {
  const who = gh(['api', 'user', '--jq', '.login'])
  console.log(`Authenticated as ${who}`)

  gh([
    'api',
    '-X',
    'PATCH',
    '/user',
    '-f',
    `name=${profile.name}`,
    '-f',
    `bio=${profile.bio}`,
    '-f',
    `blog=${profile.blog}`,
    '-f',
    `location=${profile.location}`,
    '-F',
    'hireable=true',
  ])
  console.log('Updated profile: name, bio, blog, location, hireable')

  gh([
    'api',
    '-X',
    'PATCH',
    '/repos/felipewrsilva/portfolio',
    '-f',
    `description=${portfolioDescription}`,
    '-f',
    'homepage=https://felipewrsilva.dev',
  ])
  console.log('Updated portfolio repo description + homepage')

  const check = gh([
    'api',
    'user',
    '--jq',
    '{name,bio,blog,location,hireable}',
  ])
  console.log(check)
}

main()
