const msToTime= require("./timeConverter")

describe ("Testing the sum function", () =>{
    test("Convert ms to hr,min, sec, ms", () =>{
        expect(msToTime(300)).toBe("00:00:00.3")
    });
    test("Convert ms to hr,min, sec, ms", () =>{
        expect(msToTime(7300)).toBe("00:00:07.3")
    });
    test("Convert ms to hr,min, sec, ms", () =>{
        expect(msToTime(490000)).toBe("00:08:10.0")
    });
});