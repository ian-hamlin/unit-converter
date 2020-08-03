import Conversion from "./types/Conversion";

export function chunkArray(input: Conversion[], chunk_size: number) {
  var results = [];

  while (input.length) {
    results.push(input.splice(0, chunk_size));
  }

  return results;
}
