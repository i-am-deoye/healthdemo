const { deterministicPartitionKey, setCandidateBy, cleanCandidate, isCandidate_Sha3_512 } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});


describe("setCandidateBy", () => {
  it("Returns the null when given no input", () => {
    const candidate = setCandidateBy();
    expect(candidate).toBe(null);
  });
});


describe("cleanCandidate", () => {
  it("Returns the literal '0' when given no input", () => {
    const candidate = cleanCandidate();
    expect(candidate).toBe("0");
  });
});


describe("isCandidate_Sha3_512", () => {
  it("Returns false when given no input", () => {
    const isSHA3512 = isCandidate_Sha3_512();
    expect(isSHA3512).toBe(false);
  });
});
