---
title: 'Dampfdruck und Siedetemperatur'
description: 'Versuch W1 im Physikalischen Grundpraktikum: Dampfdruckkurve von Wasser aufzunehmen'
pubDate: 2025-10-15
tags: ['TU-Ilmenau', 'Physik', 'Praktikum']
categories: ['Experimente']
sections: ['blog', 'labor']
draft: false
math: true
heroImage: ../../../assets/images/posts/dampfdruck-und-siedetemperatur/labor-hero.jpg
heroImageAlt: 'Wasser wird im Labor in einen Rundkolben gegossen'
---

Für das Fach Grundpraktikum der Physik 1[^2] dürfen wir verschiedene Experimente im Physiklabor absolvieren. Der Artikel wird kein Protokoll. Ich möchte eig nur ein wenig über das Experiment schreiben. Es war ein sehr warmer und sonniger Tag. Leider habe ich damals vergessen, Bilder von dem Experiment zu machen.

![Versuchsapparatur des Experiments W1 – Dampfdruck](../../../assets/images/posts/dampfdruck-und-siedetemperatur/csm_W1_aaf90b82c4.jpg)[^3]

Im Grunde ging es um zwei Punkte:

1. molare Verdampfungsenthalpie
2. Höhenbestimmung über die Wassertemperatur


### molare Verdampfungsenthalpie
Die molare Verdampfungsenthalpie

$$
\left[Q_{m,v}\right] = \frac{\text{J}}{\text{mol}}
$$

ist eig nur die Energie, die man benötigt, um 1 Mol Flüssigkeit vollständig in einen gasförmigen Zustand zu überführen. Bei isobarer und isothermer Prozessführung entspricht $Q_{m,v}$ der molaren Verdampfungsenthalpie $\Delta H_v$.
Als Ausgangspunkt nimmt man die Clausius-Clapeyron-Gleichung

$$
\frac{dp_S}{dT} = \frac{Q_{m,v}}{T\left(V_{m,G} - V_{m,Fl}\right)}
$$

Hinreichend weit unterhalb des kritischen Punktes ist das Molvolumen der Flüssigkeit gegenüber dem des Dampfes vernachlässigbar, also $V_{m,G} - V_{m,Fl} \approx V_{m,G}$. Nimmt man zusätzlich an, dass sich der Wasserdampf wie ein ideales Gas verhält ($p_S V_{m,G} = RT$), bekommt man die Gleichung

$$
\frac{dp_S}{dT} = \frac{\Delta H_v}{R}\frac{p_S}{T^2}
$$

Diese Gleichung ist die für unser Experiment relevante. Integriert man diese mit den Anfangsbedingungen $p_{S,0} = p_S(T_0)$, erhält man daraus

$$p_S(T) = p_{S,0} \exp\left[-\frac{\Delta H_v}{R}\left(\frac{1}{T} - \frac{1}{T_0}\right)\right]$$

Mit den gemessenen Wertepaaren und etwas Logarithmieren lässt sich daraus dann per linearer Regression die molare Verdampfungsenthalpie $\Delta H_v$ von Wasser bestimmen.

### Höhenbestimmung über die Wassertemperatur

Der zweite Teil des Versuchs nutzt eig nur einen simplen physikalischen Zusammenhang aus: Wasser siedet immer dann, wenn der Sättigungsdampfdruck $p_S$ gleich dem umgebenden Luftdruck $p_L$ ist. Und weil der Luftdruck mit der Höhe abnimmt, sinkt auch die Siedetemperatur, je höher man kommt. Deshalb kann man aus einer gemessenen Siedetemperatur eig ziemlich genau berechnen, in welcher Höhe man sich befindet.

Eine Höhenänderung $dh$ sorgt wegen des Schweredrucks der Luft für eine Luftdruckänderung

$$
dp_L = -\rho_L \, g \, dh = -\frac{p_L M}{RT} g \, dh
$$

wobei $\rho_L$ die Luftdichte und $M$ die Molmasse der Luft ist. Für kleine Höhenunterschiede kann man die Luftdichte als konstant annehmen und die Differentiale durch endliche Differenzen ersetzen. Damit und mit der vorherigen Gleichung für $dp_S/dT$ ergibt sich

$$
\Delta p_S = \frac{\Delta H_v \, p_L}{R \, T_S^2} \Delta T_S
$$

und

$$
\Delta p_L = -\frac{p_L M}{R T_L} g \, \Delta h
$$

Weil beim Sieden $p_S = p_L$ gilt, muss auch $\Delta p_S = \Delta p_L$ gelten, und wenn man die beiden Gleichungen gleichsetzt, bekommt man den Zusammenhang zwischen Höhenänderung und Änderung der Siedetemperatur:

$$
\Delta h = -\frac{\Delta H_v \, T_L}{M \, g \, T_S^2} \Delta T_S
$$

Im Praktikum haben wir dafür im Keller und ganz oben im Faraday-Bau jeweils Wasser zum Kochen gebracht und die Siedetemperatur mit einem Beckmann-Thermometer gemessen, das Temperaturdifferenzen auf 0,01 K genau anzeigt. Die Differenz der beiden Siedetemperaturen $\Delta T_S$, zusammen mit der zuvor bestimmten Verdampfungsenthalpie $\Delta H_v$, der mittleren Lufttemperatur $T_L$ und der Molmasse von Luft $M = 28{,}96 \cdot 10^{-3}\ \text{kg/mol}$, ergibt dann über obige Formel die Höhendifferenz $\Delta h$.

Zum Vergleich haben wir die Höhendifferenz zusätzlich ganz klassisch aus Barometerablesungen in beiden Stockwerken bestimmt. Beide Werte lagen im Rahmen ihrer Unsicherheiten schön nah an der tatsächlichen Höhendifferenz von 15,25 m, was ich persönlich echt beeindruckend fand, weil man sowas allein aus der Kochtemperatur von Wasser rausbekommt.

Durch das warme, sonnige Wetter an dem Tag gab es dabei minimale Einflüsse auf die Messung, da sich durch die höhere Lufttemperatur $T_L$ auch der Luftdruck $p_L$ leicht ändert, und beides geht direkt in die Formel für $\Delta h$ ein.

Titelbild[^1]: Photo by Ivan S from Pexels.

[^1]: [https://www.pexels.com/photo/a-person-pouring-liquid-in-flat-bottomed-flask-9629702/](https://www.pexels.com/photo/a-person-pouring-liquid-in-flat-bottomed-flask-9629702/) (abgerufen am 25.09.2026)

[^2]: [https://www.tu-ilmenau.de/universitaet/fakultaeten/fakultaet-mathematik-und-naturwissenschaften/profil/institute-und-fachgebiete/institut-fuer-physik/profil/physikalisches-grundpraktikum](https://www.tu-ilmenau.de/universitaet/fakultaeten/fakultaet-mathematik-und-naturwissenschaften/profil/institute-und-fachgebiete/institut-fuer-physik/profil/physikalisches-grundpraktikum)

[^3]: Foto: Dr. Anke Sander, TU Ilmenau. [https://www.tu-ilmenau.de/universitaet/fakultaeten/fakultaet-mathematik-und-naturwissenschaften/profil/institute-und-fachgebiete/institut-fuer-physik/profil/physikalisches-grundpraktikum/uebersicht/waermelehre](https://www.tu-ilmenau.de/universitaet/fakultaeten/fakultaet-mathematik-und-naturwissenschaften/profil/institute-und-fachgebiete/institut-fuer-physik/profil/physikalisches-grundpraktikum/uebersicht/waermelehre)

