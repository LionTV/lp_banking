## Svelte Lua Template

To trigger (client-side):
```lua
TriggerEvent('lp_svelteTest:show_Interface')
```

To hide (client-side):
```lua
TriggerEvent('lp_svelteTest:hide_Interface')
```

## Development
Install the dependencies:
```
npm install
```
To build for development:
```
npm run dev
```
Develop at [localhost:8080/build](http://localhost:8080/build).

To build for production:
```
npm run build
```
