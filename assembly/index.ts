import { db } from '@vsc.eco/sdk/assembly';

export function paradiseContractTest(): void {
  console.log("Hello world debug!")
  db.setObject("my-storage-key", "Hello world prod!")
}