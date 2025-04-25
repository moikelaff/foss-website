import * as migration_20250425_085605 from './20250425_085605';

export const migrations = [
  {
    up: migration_20250425_085605.up,
    down: migration_20250425_085605.down,
    name: '20250425_085605'
  },
];
