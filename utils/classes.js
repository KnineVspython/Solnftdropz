/**
 * classes()
 * @description creates a formatted className from given arguments
 * @example cls('foo', 'bar', { baz: true }) // 'foo bar baz'
 * @link https://github.com/JedWatson/classnames
 */
function classes(
  /** @type {any[]} */ ...args
) {
  if (!args.length) throw new Error('No argument is used');
  let /** @type {string[]} */ names = [];
  args.forEach((arg) => {
    if (!arg) return;
    const argType = arg?.constructor;
    if (argType === String || argType === Number) {
      names.push(arg.toString());
    } else if (argType === Array) {
      let inner = classes.apply(null, arg);
      if (inner) names.push(inner);
    } else if (argType === Object) {
      let entries = Object.entries(arg);
      entries.map(([key, value]) => value && names.push(key));
    }
    return;
  });
  return names.join(' ');
}

module.exports.classes = classes;
module.exports = classes;
