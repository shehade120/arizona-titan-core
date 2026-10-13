# Arizona Titan - Deploy Script
# Uso: .\deploy.ps1

Write-Host "=== ARIZONA TITAN DEPLOYMENT ===" -ForegroundColor Cyan

# Check if in correct directory
if (-not (Test-Path ".git")) {
    Write-Host "ERROR: Not a git repository" -ForegroundColor Red
    exit 1
}

# Stage all changes
Write-Host "Staging changes..." -ForegroundColor Yellow
git add -A

# Generate timestamp for commit message
 = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Write-Host "Deployed at: " -ForegroundColor Green

# Commit with message
 = "deploy: Arizona Titan update - "
git commit -m 

# Push to GitHub
Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "
✅ Deployment complete!" -ForegroundColor Green
Write-Host "Visit: https://arizonatitan.com" -ForegroundColor Cyan
