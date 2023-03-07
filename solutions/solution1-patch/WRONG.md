# WRONG

```yaml
react17@1.0.0

devDependencies:
  @types/react 17.0.53
  @types/react-dom 17.0.11
  └── @types/react 18.0.28
```

```yaml
# pnpm-lock.yaml
  /@types/react-dom/17.0.11_hkx3apkurkmbs7ras3nb42pyty:
    resolution: {integrity: sha512-f96K3k+24RaLGVu/Y2Ng3e1EbZ8/cVJvypZWd7cy0ofCBaf2lcM46xNhycMZ2xGwbBjRql7hOlZ+e2WlJ5MH3Q==}
    dependencies:
      '@types/react': 18.0.28 # <---- this one
    dev: true
    patched: true
```