# File: api.spec

# -*- mode: python ; coding: utf-8 -*-

import sys
import os
import site

# Path to the venv
venv = os.path.join(os.path.dirname(sys.executable), 'lib', 'site-packages')

# Include venv paths
sys.path.append(venv)

block_cipher = None

a = Analysis(
    ['python/main.py'],
    pathex=['./python'],
    binaries=[],
    datas=[],
    hiddenimports=[
        'asyncio',
        'fastapi',
        'uvicorn',
        'os',
        'api_model',
        'fastapi.middleware.cors'
    ],
    hookspath=[],
    runtime_hooks=[],
    excludes=[],
    win_no_prefer_redirects=False,
    win_private_assemblies=False,
    cipher=block_cipher,
    noarchive=False,
)

pyz = PYZ(
    a.pure,
    a.zipped_data,
    cipher=block_cipher,
)

exe = EXE(
    pyz,
    a.scripts,
    [],
    exclude_binaries=True,
    name='main',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    console=True,
    icon=None,  # You can specify an icon file if you want
)

coll = COLLECT(
    exe,
    a.binaries,
    a.zipfiles,
    a.datas,
    strip=False,
    upx=True,
    upx_exclude=[],
    name='main',
)