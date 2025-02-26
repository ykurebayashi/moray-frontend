import { useCallback } from "react";
export var useLocalStorage = function () {
    var getValue = useCallback(function (key) {
        var value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }, []);
    var setValue = useCallback(function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }, []);
    return { getValue: getValue, setValue: setValue };
};
