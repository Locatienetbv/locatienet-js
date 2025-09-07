@echo off
REM Build OpenAPI docs via Redocly

set SCRIPT_DIR=%~dp0
set PAGES_DIR=C:\websites\locatienetbv.github.io
set SUBDIR=locatienet-api-docs
set TEMP_SPEC=%SCRIPT_DIR%..\swagger.json
set OPENAPI_URL=https://services.locatienet.com/swagger/v1/swagger.json

REM Download OpenAPI JSON
powershell -ExecutionPolicy Bypass -Command "Invoke-WebRequest -Uri '%OPENAPI_URL%' -OutFile '%TEMP_SPEC%'"

REM Generate HTML
npx @redocly/cli build-docs "%TEMP_SPEC%" -o "%PAGES_DIR%\%SUBDIR%\index.html"

REM Create .nojekyll
echo. > "%PAGES_DIR%\%SUBDIR%\.nojekyll"

REM Git commit & push if repo exists
cd /d "%PAGES_DIR%"
git rev-parse --is-inside-work-tree >nul 2>&1
IF %ERRORLEVEL% EQU 0 (
    git add "%SUBDIR%"
    git commit -m "Update OpenAPI documentation"
    git push
)

echo Documentation published to https://locatienetbv.github.io/%SUBDIR%/
pause
