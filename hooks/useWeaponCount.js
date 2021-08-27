import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import MainContractAbi from 'abi/CryptoBlades.json';

const MAIN_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_MAIN_CONTRACT_ADDRESS;

export default function useWeaponCount(initialState = {}) {
  const { account, library } = useWeb3React();
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState();
  const { kind, level } = initialState;

  useEffect(() => {
    if (!library || !account || !kind || !level) {
      return;
    }
    fetchCount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, library]);

  async function fetchCount() {
    if (!library || !account || !kind || !level) {
      return;
    }
    const contract = new library.eth.Contract(MainContractAbi, MAIN_CONTRACT_ADDRESS);
    setLoading(true);
    const res = await contract.methods.getWeaponsCountByKindLevel(kind, level).call();
    setCount(res);
    setLoading(false);
  }

  return { count, loading, fetchCount };
}
