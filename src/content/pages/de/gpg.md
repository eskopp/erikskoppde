---
title: GPG
description: Öffentliche GPG-Schlüssel für verschlüsselte E-Mails und signierte Commits.
translationKey: gpg
---

Für verschlüsselte E-Mails und signierte Commits verwende ich zwei separate GPG-Schlüssel.

## info@erikskopp.de

- **Fingerprint:** `27A6 5448 F68D B035 5C77 28BE 1C0C FDC0 33F0 3C17`
- **Download:** [erikskopp.de.asc](/gpg/erikskopp.de.asc)

## erik.skopp@tu-ilmenau.de

- **Fingerprint:** `70C9 F187 92AA E42F D039 B845 E9CD C972 D4C1 9E8D`
- **Download:** [tu-ilmenau.de.asc](/gpg/tu-ilmenau.de.asc)

## Import

```bash
curl -fsSL https://erikskopp.de/gpg/erikskopp.de.asc | gpg --import
curl -fsSL https://erikskopp.de/gpg/tu-ilmenau.de.asc | gpg --import
```

Bitte vergleiche den Fingerprint nach dem Import mit den oben genannten Werten.
