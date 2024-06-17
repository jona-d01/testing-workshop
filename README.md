# Testing-Workshop

## Aufgabe 1: *Test Driven Development mit JUnit*

### Ziel:
Mit dieser Aufgabe soll das Schreiben von Unit-Tests nach dem „Test Driven Development“-Ansatz geübt werden.

### Anforderungen:
Die Funktion [FizzBuzz.of(*input*)](./Aufgabe_1/src/FizzBuzz.java) erhält einen Integer-Wert als input und soll folgende Strings zurückgeben:
* Für Vielfache von 3 gib „**Fizz**“ zurück.
* Für Vielfache von 5 gib „**Buzz**“ zurück.
* Für Vielfache von 3 und 5 gib „**FizzBuzz**“ zurück.
* Für alle anderen Zahlen gib den Eingabewert zurück.

Beispiel:
```
1
2
Fizz
4
Buzz
Fizz
7
...
14
FizzBuzz
16
...
```

### Vorgehensweise:
Wiederhole die Schritte 1-4, bis die Funktion alle Anforderungen erfüllt und diese durch Tests abgedeckt sind!

1. Füge einen Test in der Klasse [FizzBuzzTest](./Aufgabe_1/src/FizzBuzzTest.java) hinzu und führe alle Test aus
2. Passe die Funktion [FizzBuzz.of(*input*)](./Aufgabe_1/src/FizzBuzz.java) mit möglichst wenig Änderungen an, um die Tests zu absolvieren
3. Führe alle Tests aus und prüfe, ob diese erfolgreich durchgelaufen sind
4. Entferne ggf. redundanten Code

### Lösung:
Eine mögliche Lösung befindet sich im Branch [solution](/../../tree/solution).


## Aufgabe 2: UI-Tests mit Storybook

### Ziel:
Mit dieser Aufgabe soll das Schreiben von UI-Tests mit Playwright geübt werden.

### Voraussetzungen:
- [Node.js](https://nodejs.org/en/download/prebuilt-binaries) Installation
- JavaScript Kenntnisse

Führe folgenden Befehl aus, um die notwendigen Dependencies zu installieren.
```bash
cd Aufgabe_2
npm install
```

### Anforderungen:
Schreibe jeweils einen Test für die Aufgaben in der folgenden Datei: [example.spec.js](./Aufgabe_2/tests/example.spec.js)

### Playwright-Dokumentation:

https://playwright.dev/
- [Assertions](https://playwright.dev/docs/test-assertions)
- [Locators](https://playwright.dev/docs/locators)
- [Actions](https://playwright.dev/docs/input)

### Lösung:
Eine mögliche Lösung befindet sich im Branch [solution](/../../tree/solution).