import {
  contract,
  reset,
  stateCache,
  setContractImport,
} from "@vsc.eco/contract-testing-utils";

import { expect } from "chai";
const beforeAll = globalThis.beforeAll || globalThis.before;

const contractImport = import("../build/debug");

beforeAll(() => setContractImport(contractImport));

beforeEach(reset);

describe("hello-world", () => {
  it("should set a value in persisting storage", () => {
    contract.paradiseContractTest()
  
    expect(stateCache.get("my-storage-key")).to.equal("Hello world prod!");
  });
});
