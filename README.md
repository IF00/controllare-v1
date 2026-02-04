
# Controllare Gestão - Deploy Instructions

Este projeto foi otimizado para a Vercel.

## Como fazer o deploy:

### Opção A: GitHub (Melhor Prática)
1. Crie um novo repositório no GitHub.
2. Execute os comandos no seu terminal:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin SEU_URL_DO_GITHUB
   git push -u origin main
   ```
3. No painel da Vercel, importe este repositório.

### Opção B: Vercel CLI
1. Instale a CLI: `npm install -g vercel`
2. Execute: `vercel --prod`

## Configurações na Vercel:
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
