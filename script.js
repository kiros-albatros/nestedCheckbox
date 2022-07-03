document.addEventListener("DOMContentLoaded", function (event) {
    const allCheckboxes = document.querySelectorAll("input[type=checkbox]");
//    let parentCheckboxes = document.querySelectorAll(".js-checkbox-scope");

    allCheckboxes.forEach((element) => {
        element.addEventListener("change", function () {
            //    console.log("change");
            let parentLi = this.closest("li");
            //    console.log(parentLi);
            const childrenCheckboxes = parentLi.querySelectorAll(
                ".nested__sublist input[type=checkbox]"
            );
            //    console.log(childrenCheckboxes);
            childrenCheckboxes.forEach((child) => {
                child.checked = this.checked;
            });

            let parentLevel = parentLi.getAttribute("data-level");

            if (parentLevel !== "1") {
                parentLevel = Number(parentLevel);
                //    console.log(parentLevel);

                if (this.checked === true) {
                    //    console.log("checked shit");
                    for (let i = parentLevel - 1; i >= 1; i--) {
                        //    console.log("i ", i);
                        parentLi = parentLi.closest(`[data-level="${i}"]`);
                        //    console.log("parentLi ", parentLi);
                        let checkItem = parentLi.querySelector(
                            "input[type=checkbox]"
                        );
                        //    console.log("checkItem ", checkItem);
                        checkItem.checked = true;
                    }
                } else {
                    console.log("empty shit");
                    for (let i = parentLevel; i >= 1; i--) {
                        console.log("i ", i);

                        parentLi = this.closest(`[data-level="${i}"]`);
                        console.log("empty parentLi ", parentLi);

                        let checkers = parentLi.querySelectorAll(
                            'input[type="checkbox"]:checked'
                        );

                        console.log('checkers.length ', checkers.length);

                        if (checkers.length <= 1) {
                            this.closest(
                                `[data-level="${i}"]`
                            ).querySelector(
                                "input[type=checkbox]"
                            ).checked = false;
                        }
                    }
                }
            }
        });
    });
});
