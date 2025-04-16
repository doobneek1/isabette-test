Write-Host " Watching for changes in src/ ... (Ctrl+C to stop)"

npm run build
& "$env:APPDATA\npm\firebase.cmd" deploy --only hosting:test

while ($true) {
  $before = (Get-ChildItem -Recurse ./src -Include *.js,*.jsx,*.ts,*.tsx,*.css,*.json |
    Get-FileHash -Algorithm SHA256 |
    ForEach-Object { $_.Hash }) -join ''

  Start-Sleep -Seconds 3

  $after = (Get-ChildItem -Recurse ./src -Include *.js,*.jsx,*.ts,*.tsx,*.css,*.json |
    Get-FileHash -Algorithm SHA256 |
    ForEach-Object { $_.Hash }) -join ''

  if ($before -ne $after) {
    Write-Host "`n  Change detected. Rebuilding and deploying..."
    npm run build
    & "$env:APPDATA\npm\firebase.cmd" deploy --only hosting:test
    Write-Host " Deployed to test site."
  }
}
