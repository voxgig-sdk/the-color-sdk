package core

type TheColorError struct {
	IsTheColorError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTheColorError(code string, msg string, ctx *Context) *TheColorError {
	return &TheColorError{
		IsTheColorError: true,
		Sdk:              "TheColor",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TheColorError) Error() string {
	return e.Msg
}
