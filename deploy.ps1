# ============================================================
# Script de deploiement TAL Communities -> Firebase Hosting
# Auteur : TAL Communities Dev
# Usage  : Ouvrir PowerShell dans le dossier du projet, puis
#          executer : .\deploy.ps1
# ============================================================

Write-Host ""
Write-Host "=== TAL COMMUNITIES - Deploiement Firebase ===" -ForegroundColor Cyan
Write-Host ""

# Etape 1 : Creer le projet Firebase (si inexistant)
Write-Host "[1/4] Creation du projet Firebase 'tal-communities'..." -ForegroundColor Yellow
firebase projects:create tal-communities --display-name "TAL Communities"

# Etape 2 : Activer le Hosting sur le projet
Write-Host ""
Write-Host "[2/4] Configuration du projet par defaut..." -ForegroundColor Yellow
firebase use tal-communities

# Etape 3 : Activer Firebase Hosting sur le projet
Write-Host ""
Write-Host "[3/4] Build de production React..." -ForegroundColor Yellow
npm run build

# Etape 4 : Deployer sur Firebase Hosting
Write-Host ""
Write-Host "[4/4] Deploiement sur Firebase Hosting..." -ForegroundColor Yellow
firebase deploy --only hosting

Write-Host ""
Write-Host "=== Deploiement termine ! ===" -ForegroundColor Green
Write-Host "URL : https://tal-communities.web.app" -ForegroundColor Green
Write-Host ""
