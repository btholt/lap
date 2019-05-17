let marks = [];
module.exports = {
  mark(tag) {
    const time = Date.now();
    marks.push({ tag, time });
  },
  end() {
    const end = Date.now();

    for (let i = 0; i < marks.length; i++) {
      marks[i].time = marks[i + 1]
        ? marks[i + 1].time - marks[i].time
        : end - marks[i].time;
      marks[i] = {
        tag: marks[i].tag,
        ms: marks[i].time,
        s: marks[i].time / 1000
      };
    }

    let res = marks;
    marks = [];
    return res;
  }
};
