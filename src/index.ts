// 用来提供自定义错误的父类
function XErrorFunction(message: string = '错误(暂无提示)') {
	// @ts-ignore
	this.message = message;
	// @ts-ignore
	this.name = 'IFError';
}

XErrorFunction.prototype = new Error();
XErrorFunction.prototype.constructor = XErrorFunction;

// 添加这个主要是为了外边不要重复的报错
// @ts-ignore
class XError extends XErrorFunction {
	name: string;

	constructor(message: string) {
		super(message);
		this.name = 'IFError';
	}
}

export default XError;
