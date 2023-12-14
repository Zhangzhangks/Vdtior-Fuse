export const zks = {
    // mounted: (el, bilding) => {
    //     el.focus()
    //     console.log(el, bilding, '自定义指定');
    // },
    // update: (el, bilding) => {
    //     console.log(el, '更新');
    // }
};

export const zzks = {
    mounted: (el, bilding) => {
        let newarr = [];
        if (bilding.modifiers.up) {
            let val = bilding.value;

            val.forEach((item) => {
                val.push(
                    bilding.value.splice(
                        Math.floor(Math.random() * bilding.value.length),
                        1
                    )[0]
                );
            });
            console.log(bilding.value);
            newarr = val;
        }
        el.innerHTML = newarr
            .map((item) => {
                return `<li>${item}</li>`;
            })
            .join("");
    },
};
