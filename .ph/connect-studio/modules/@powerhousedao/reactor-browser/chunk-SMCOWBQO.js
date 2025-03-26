import {
  atom,
  useAtom
} from "./chunk-ZDPTMJVV.js";
import {
  BrowserKeyStorage
} from "./chunk-HLXFFZBD.js";
import {
  ConnectCrypto
} from "./chunk-K5CQIUGJ.js";

// node_modules/.pnpm/@powerhousedao+reactor-browser@1.22.5-dev.1_@parcel+watcher@2.5.1_@types+react@18.3.20_buffer_6jn27fqqveig3riimacscy3dxq/node_modules/@powerhousedao/reactor-browser/dist/src/hooks/useConnectCrypto.js
import { useEffect, useMemo } from "react";
var connectCrypto = (async () => {
  const connectCrypto2 = new ConnectCrypto(new BrowserKeyStorage());
  await connectCrypto2.did();
  return connectCrypto2;
})();
function useConnectCrypto() {
  return useMemo(() => ({
    async regenerateDid() {
      const crypto = await connectCrypto;
      return crypto.regenerateDid();
    },
    async did() {
      const crypto = await connectCrypto;
      return crypto.did();
    },
    sign: async (data) => {
      const crypto = await connectCrypto;
      return await crypto.sign(data);
    }
  }), []);
}
var didAtom = atom(void 0);
function useConnectDid() {
  const [did, setDid] = useAtom(didAtom);
  useEffect(() => {
    if (did) {
      return;
    }
    connectCrypto.then((c) => c.did()).then((did2) => setDid(did2)).catch(console.error);
  });
  return did;
}

export {
  useConnectCrypto,
  useConnectDid
};
