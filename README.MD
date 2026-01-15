# Gerador de Carteira Bitcoin (Testnet)

Projeto desenvolvido no bootcamp **DIO + Binance** com foco em fundamentos de **blockchain**, geração de **chaves** e simulação de **transações Bitcoin na Testnet**.

---

## 🎯 Objetivo do desafio

- Gerar **chave privada**
- Derivar **chave pública**
- Gerar **endereço (Bitcoin)**
- Importar a carteira em um gerenciador (ex.: **Electrum**)
- Receber e enviar transações na **Bitcoin Testnet**
- Validar transações em um **Block Explorer**

---

## 🧰 Tecnologias e ferramentas

- **Node.js** (scripts via terminal)
- **JavaScript**
- **Electrum** (wallet para importar e operar)
- **Bitcoin Testnet Faucet** (fundos de teste)
- **Block Explorer** (visualização das transações)

---

## 🧩 Arquitetura do fluxo (alto nível)

```mermaid
flowchart LR
  A[Node.js Scripts] --> B[Gera chaves e endereço]
  B --> C[Importa no Electrum]
  C --> D[Recebe BTC Testnet via Faucet]
  D --> E[Envia transação]
  E --> F[Consulta no Block Explorer]

---

## 🧠 Aprendizados
- ao atualizar a versão da dependencia bip32 a função bip32.fromSeed apresentou erro, mas com pesquisa e ajuda do chatGPT identifiquei o erro e corrigi
- ao importar a chave pública dentro do electrum a carterira ficou apenas leitura e não consegui de primeira fazer a transferencia entre as carteiras que foram geradas, mas ao importar utilizando a chave privada consegui concluir a desafio.
- Importante ter atenção nas instruções para acertar de primeira, no entanto realizar o troubleshotting me fez raciocionar, pesquisar os erros e econtrar as soluções, acredito que assim fixei o aprendizado de maneira mais ampla.
```
