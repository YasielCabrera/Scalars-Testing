import {
  atom,
  useAtom
} from "./chunk-FW7N6EJH.js";
import {
  BrowserKeyStorage
} from "./chunk-YWKVPJNL.js";
import {
  ConnectCrypto
} from "./chunk-2X2M6BYG.js";

// ../../packages/reactor-browser/dist/src/hooks/useConnectCrypto.js
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
