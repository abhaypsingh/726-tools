@echo off
echo Creating all 501 utility files...

REM This batch file creates the folder structure and generates all utility files
REM Run this to complete the implementation of all 501 utilities

REM Create directories
mkdir utilities\thinking-^&-planning 2>nul
mkdir utilities\learning-^&-memory 2>nul
mkdir utilities\emotions-^&-wellness 2>nul
mkdir utilities\productivity-^&-focus 2>nul
mkdir utilities\relationships-^&-social 2>nul
mkdir utilities\writing-^&-language 2>nul
mkdir utilities\math-^&-logic 2>nul
mkdir utilities\visual-^&-design 2>nul
mkdir utilities\food-^&-cooking 2>nul
mkdir utilities\health-^&-fitness 2>nul
mkdir utilities\travel-^&-adventure 2>nul
mkdir utilities\audio-^&-sound 2>nul
mkdir utilities\productivity-tools 2>nul
mkdir utilities\privacy-^&-security 2>nul
mkdir utilities\finance-^&-money 2>nul
mkdir utilities\home-^&-lifestyle 2>nul
mkdir utilities\personal-development 2>nul
mkdir utilities\life-management 2>nul
mkdir utilities\fun-^&-games 2>nul

echo Directories created. Now run: node generate-complete-utilities.js
echo Done!