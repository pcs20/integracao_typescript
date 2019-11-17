export default (_req: Request, _res: Response, next: Function) => {
    console.log('passou pelo middleware');
    return next();
}