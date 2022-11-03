"use strict";
// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.
module.exports = {
    config: {
        updateChannel: 'stable',
        fontSize: 16,
        fontFamily: 'Menlo, monospace',
        cursorColor: 'red',
        cursorShape: 'BEAM',
        cursorBlink: false,
        foregroundColor: '#fff',
        backgroundColor: '#000',
        selectionColor: 'rgba(255, 0, 0, .2)',
        borderColor: '#000',
        css: '',
        termCSS: '',
        showHamburgerMenu: '',
        showWindowControls: '',
        padding: '12px 14px',
        colors: {
            black: '#000000',
            red: 'rgb(151, 4, 12)',
            green: 'rgb(23, 164, 26)',
            yellow: 'rgb(153, 152, 29)',
            blue: 'rgb(5, 22, 175)',
            magenta: 'rgb(177, 25, 176)',
            cyan: 'rgb(26, 166, 177)',
            white: 'rgb(191, 191, 191)',
            lightBlack: 'rgb(102, 102, 102)',
            lightRed: 'rgb(227, 10, 23)',
            lightGreen: 'rgb(33, 215, 38)',
            lightYellow: 'rgb(229, 228, 49)',
            lightBlue: 'rgb(11, 38, 251)',
            lightMagenta: 'rgb(227, 35, 227)',
            lightCyan: 'rgb(39, 229, 228)',
            lightWhite: 'rgb(230, 229, 230)'
        },
        shell: '',
        shellArgs: ['--login'],
        env: {
            'SOBOLE_THEME_MODE': 'light'
        },
        bell: false,
        copyOnSelect: false,
        scrollback: 10000,
        summon: {
            hotkey: 'ctrl+;'
        },
        opacity: 0.7,
    },
    plugins: [
        'hyper-tabs-enhanced',
        'hyperterm-summon',
        'hypercwd',
        'hyper-opacity',
        'hyper-search'
    ],
    hyperTabs: {
        trafficButtons: true,
        border: true
    },
    localPlugins: [],
    keymaps: {
        // Example
        // 'window:devtools': 'cmd+alt+o',
    }
};
//# sourceMappingURL=config-default.js.map