class Utils {
   static isNode = false;
}

export function fromB64ToArray(str) {
   if (str == null) {
      return null;
   }
   if (Utils.isNode) {
      return new Uint8Array(Buffer.from(str, "base64"));
   } else {
      const binaryString = Utils.global.atob(str);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i += 1) {
         bytes[i] = binaryString.charCodeAt(i);
      }
      return bytes;
   }
}
