---
keywords: [Klaytn sendTransaction, dapp:sendTransaction, Klaytn]
---

:::tip

Klaytn developers make use of external libraries like [caver.js](https://docs.klaytn.foundation/dapp/sdk/caver-js/getting-started). The following is an explanation of how to initiate a transfer transaction by invoking the `eth_sendTransaction` method through `dapp.request`. We recommend utilizing a dedicated library rather than accessing the service directly if you want a greater degree of abstraction than the API provides.
:::

To send a transaction from an Klaytn web application, on the dapp for example, it needs to be followed the steps below.

1. Detection of Dapp providers (`window.dapp`)
2. Detecting the Klaytn network to which the user is linked
3. Import the Klaytn account of the user

The WELLDONE Wallet finds and imports networks associated with that wallet address. Before submitting a transaction, you should evaluate whether to transmit it to the mainnet or the testnet. The following format can be used to transmit the transaction:

```tsx
const response = await dapp.request('klaytn', {
  method: 'dapp:sendTransaction',
  params: [JSON.stringify(transactionParameters)],
});
const txHash = response;
```

## 1. Returns

It returns the transaction hash value as a Promise object of type string.

```typescript
Promise<string>;
```

## 2. Params

```typescript
interface TransactionParameters {
  from: string; 
  to: string; 
  gas?: string; // overwritten by WELLDONE Wallet
  gasPrice?: string; // overwritten by WELLDONE Wallet
  value?: string; 
  input: string; 
}
```

* **from** : The address the transaction is sent from.

* **to** : (optional when creating new contract) The address the transaction is directed to.

* **gas** : (optional) Integer of the gas provided for the transaction execution. It will return unused gas.

* **gasPrice** : (optional) Integer of the gasPrice used for each paid gas, in peb.

* **value** : (optional) Integer of the value sent with this transaction, in peb.

* **input** : The compiled code of a contract OR the hash of the invoked method signature and encoded parameters.

:::note
* The `gas` and `gasPrice` fields are overwritten by the WELLDONE Wallet internal logic.
:::

## 3. Example

```javascript
const sendTransaction = async () => {
  // get accounts first
  const accounts = await dapp.request('klaytn', { method: 'dapp:accounts' });
  const transactionParameters = {
    from: accounts['klaytn'].address,
    to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode
    value: '0x00',
    input: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
  };
  // sending a transaction
  try {
    const response = await dapp.request('klaytn', {
      method: 'dapp:sendTransaction',
      params: [JSON.stringify(transactionParameters)],
    });
    const txHash = response.hash;
  } catch (error) {
    /* 
      {
        message: 'User denied transaction signature',
        code: 4001,
      }
    */
  }
};
```

To complete the transaction, follow the steps outlined below. A faucet is required to transmit a transaction. [The following URL](https://www.allthatnode.com/faucet/klaytn.dsrv) will send you a tap of the Klaytn testnet token.

```jsx live
function sendTransaction() {
  const CHAIN_NAME = 'klaytn';
  const [accounts, setAccounts] = React.useState(null);
  const [txHash, setTxHash] = React.useState(null);
  async function handleGetAccount() {
    try {
      const accounts = await dapp.request(CHAIN_NAME, {
        method: 'dapp:accounts',
      });
      if (dapp.networks.klaytn.chain !== '0x329') {
        throw new Error('Please change to Klaytn Testnet in WELLDONE Wallet');
      }
      setAccounts(accounts[CHAIN_NAME].address);
    } catch (error) {
      alert(error.message);
    }
  }
  async function handleSendTransaction() {
    try {
      const transactionParameters = {
        from: accounts,
        to: '0xb700C3C7DfA7830b7943E2eE9F5e1cC359e5F9eA', //allthatnode
        value: '0x00',
        input: '0x6057361d000000000000000000000000000000000000000000000000000000000008a198',
      };
      const response = await dapp.request(CHAIN_NAME, {
        method: 'dapp:sendTransaction',
        params: [JSON.stringify(transactionParameters)],
      });
      const txHash = response.hash;

      setTxHash(txHash);
    } catch (error) {
      console.log(error);
      alert(`Error Message: ${error.message}\nError Code: ${error.code}`);
    }
  }
  return (
    <>
      {accounts ? (
        <>
          <Button onClick={handleSendTransaction} type="button">
            Send a Transaction
          </Button>
          <ResultTooltip style={{ background: '#3B48DF' }}>
            <b>Accounts:</b> {accounts}
          </ResultTooltip>
        </>
      ) : (
        <>
          <Button onClick={handleGetAccount} type="button">
            Get Account
          </Button>
          <div>You have to get account first!</div>
        </>
      )}
      {txHash && (
        <ResultTooltip style={{ background: '#F08080' }}>
          <b>Transaction Hash:</b> {txHash}
        </ResultTooltip>
      )}
    </>
  );
}
```