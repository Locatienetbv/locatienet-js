@echo off
REM ===============================================
REM Build and publish TypeDoc docs to GitHub Pages (subdir)
REM ===============================================

REM ---- Get to project root (parent of scripts) ----
cd /d "%~dp0.."

REM ---- Configurable paths ----
set PROJECT_DIR=%cd%
set PAGES_DIR=C:\websites\locatienetbv.github.io
set SUBDIR=locatienet-js-docs
set DOCS_DIR=%PROJECT_DIR%\docs

REM ---- Step 1: Build docs via npm ----
echo Building TypeDoc docs...
npx typedoc --commentStyle all --plugin typedoc-github-theme
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] building typedoc docs failed.
    exit /b 1
)

REM ---- Step 2: Clean old docs from subdir ----
echo Cleaning old docs from %SUBDIR%...
if exist "%PAGES_DIR%\%SUBDIR%" (
    rmdir /S /Q "%PAGES_DIR%\%SUBDIR%"
)

REM ---- Step 3: Copy new docs ----
echo Copying new docs into %SUBDIR%...
xcopy /E /I /Y "%DOCS_DIR%\*" "%PAGES_DIR%\%SUBDIR%\"

REM ---- Step 4: Commit and push (only if PAGES_DIR is a Git repo) ----
cd /d "%PAGES_DIR%"
git rev-parse --is-inside-work-tree >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo [WARNING] %PAGES_DIR% is not a Git repository. Skipping git commit/push.
) ELSE (
    git add .
    git commit -m "Update TypeDoc documentation for %SUBDIR%"
    git push
)

echo.
echo ===============================================
echo [SUCCESS] Documentation published!
echo URL: https://locatienetbv.github.io/%SUBDIR%/
echo ===============================================

pause
