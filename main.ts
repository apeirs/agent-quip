// ai-joke-03 entry: writes a single one-liner about AI coding agents to entry.txt.
// Node 22, standard library only, no network, deterministic.
// Local runs: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'My coding agent asked me to run one command for it, since it lacks permission. The command grants it permission.';

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeFileSync(join(dir, 'entry.txt'), JOKE, 'utf8');
