// 用来提供自定义错误的父类
function XXErrorFunction(message: string = '错误(暂无提示)') {
	// @ts-ignore
	this.message = message;
	// @ts-ignore
	this.name = 'XXError';
}

XXErrorFunction.prototype = new Error();
XXErrorFunction.prototype.constructor = XXErrorFunction;

// 添加这个主要是为了外边不要重复的报错
// @ts-ignore
class XXError extends XXErrorFunction {
	name: string;

	constructor(message: string) {
		super(message);
		this.name = 'XXError';
	}
}

export default XXError;
