const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

exports.setCandidateBy = (event) => {
  let candidate = null;
  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }
  return candidate;
}

exports.cleanCandidate = (candidate) => {
  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  return candidate;
}

exports.isCandidate_Sha3_512 = (candidate) => {
  if (candidate == null) return false;
  return candidate.length > MAX_PARTITION_KEY_LENGTH;
}

exports.deterministicPartitionKey = (event) => {
  
  let candidate = this.setCandidateBy(event);
  candidate = this.cleanCandidate(candidate);
  const isSHA3512 = this.isCandidate_Sha3_512(candidate);

  if (isSHA3512) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};