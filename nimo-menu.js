function Menu() {
    const n = 'menu-n'
    var pr_0 = document.createElement(n);
    pr_0.style.cssText = `
    position: relative;
    z-index: 1;
    background: inherit;
    `
    pr_0.createShadowRoot = pr_0.attachShadow || pr_0.createShadowRoot;
    const sh = pr_0.createShadowRoot({
        mode: 'closed'
    })
    sh.innerHTML = `
     <style>
${n}{
display: block;

}
d {
    font-weight: 400;
    box-shadow: var(--shadow);
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
}

${n}::-webkit-scrollbar {
    height: 5px;
    width: 5px;
    background: hsla(0, 0%, 0%, 0);
}

${n}::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 77%);
    border-radius: 0px;
    background-clip: padding-box;
    -webkit-border-radius: ;
    -moz-border-radius: ;
    -ms-border-radius: ;
    -o-border-radius: ;
}

${n}::-webkit-scrollbar-corner {
    background: hsla(0, 0%, 0%, 0);
}
     ${n}#pr {
    display: flex;
    background: inherit;
    color: inherit;
    font-size: 14px;
    flex-direction: column;
    position: absolute;
    right-: 10px;
    top-: 10px;
    width: inherit;
    
    min-width: 150px;
    outline: none;
    font-family: sans-serif;
    font-weight: 400;
    border-radius: 1px;
    /* hsla(0, 0%, 0%, 0.34) */
    box-shadow: 0 1px 2px currentColor;
        max-height: 100vh;
    overflow: overlay;

}

${n}#pr.moreACT {
    right-: 115px;
}

${n}#pr * {
    cursor: default;
}

${n}#wrap {
    border-bottom: 1px solid currentColor;
}

${n}#wrap:nth-last-child(1) {
    box-shadow: none;
    border: none;
}

${n}#ch {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
        white-space: nowrap;
}

${n}#ch * {
    pointer-events: none;
}

${n}#ch:hover {
    box-shadow: inset 0px 0 100vh hsla(0, 0%, 0%, 0.05);
}

${n} svg {
    width: 20px;
    height: 20px;
    opacity: 0.9;
    opacity: 90%;
    stroke-width: 1;
        margin-left: 10px;
}

/** theming**/

/** content**/

${n}#prh {
    background: #efeff4;
    color: #0076ff;
}

/** content hovered**/

${n}#ch:hover {
    background: ;
    color: ;
}

/** head **/

${n}#pr.h ${n}#wrap:nth-child(1) ${n}#ch:nth-child(1) {
    background: hsl(0, 0%, 100%);
    color: hsl(0, 0%, 70%);
}

/** head hovered**/

${n}#pr.h ${n}#wrap:nth-child(1) ${n}#ch:nth-child(1):hover {
    background: ;
    color: ;
}
     </style>
     <${n}></${n}>`
    pr = sh.lastElementChild

    //  console.dir(pr);
    pr.icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-right">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
`
    pr.id = 'pr'
    for (var val of arguments) {
        var wrap = document.createElement(n)
        wrap.id = 'wrap'
        pr.appendChild(wrap);
        for (var obj of val) {
            var ch = document.createElement(n)
            ch.id = 'ch'
            //  ch.classList.add('h')
            ch.innerText = obj.name || 'no value';
            obj.action = obj.action || new Function()
            obj.action.element = pr_0;
            ch.addEventListener('click', obj.action)
            // ch.onclick=(obj.action || new Function())
            ch.innerHTML += obj.icon || pr.icon
            wrap.appendChild(ch)
        }
    }

    function configure(e) {
        c = arguments.callee.config
        if (e instanceof Object) {
            if (e.header instanceof Object === false) {
                e.header = c.header;
            }

            if (e.body instanceof Object === false) {
                e.body = c.body;
            }
            c = e;
        }
        return c
    }

    configure.config = {
        header: {},
        body: {}
    }
    return function () {
        var parent,
            conf_0 = configure.config,
            df = false;

        for (var i = 0; i < arguments.length; i++) {
            if ('boolean' === typeof arguments[i]) {
                df = arguments[i]
            } else if (arguments[i] instanceof Function) {
                // arguments[i]()
            } else if (arguments[i] instanceof Element) {
                parent = arguments[i];
            } else if (arguments[i] instanceof Object) {
                conf_0 = arguments[i]
            }
        }
        configure.config = configure(conf_0)
        if (!df) {
            pr.classList.add('h')
        }
        if (parent) {
            parent.appendChild(pr)
        }

        if (!conf_0) {
            pr_0.style.cssText += `
        left: -100%;
    top: -100%;
    `
        }
        return new(function () {
            this.clear = function () {
                pr_0.remove()
                this.append.pend = true
            }
            this.append = function () {
                if (arguments.callee.pend) {
                    return arguments.callee.pend = false
                }
                var elm = arguments[0];
                var conf = configure(arguments[1]);
                pr_0.style.transform = `translatey(-1px)`;
                for (var d in conf.body) {
                    pr_0.style.setProperty(d, conf.body[d])
                }
                var header = pr.querySelector('menu-n#wrap:nth-child(1) menu-n#ch:nth-child(1)')
                for (var d in conf.header) {
                    header.style.setProperty(d, conf.header[d])
                }
                pr_0.pr = elm
                elm.appendChild(pr_0)
            }
            this.element = pr_0;
        })()
    }
}