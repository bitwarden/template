  async hash(
    value: string | Uint8Array,
    algorithm: "sha1" | "sha256" | "sha512" | "md5",
  ): Promise<Uint8Array> {
    if (algorithm === "md5") {
      const md = forge.md.md5.create();
      const valueBytes = this.toByteString(value);
      md.update(valueBytes, "raw");
      return Utils.fromByteStringToArray(md.digest().data);
    }

    const valueBuf = this.toBuf(value);
    const buffer = await this.subtle.digest(
      { name: this.toWebCryptoAlgorithm(algorithm) },
      valueBuf,
    );
    return new Uint8Array(buffer);
  }
