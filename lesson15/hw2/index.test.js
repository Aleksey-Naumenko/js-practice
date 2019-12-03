import { createLogger } from './index';

it('Should get empty array', () => {
    const logger = createLogger();
    logger.warn('Be careful!');
    logger.error('We have got an error here');
    const result = logger.getRecords('log');
    expect(result).toEqual([]);
});


it('Should get just an array', () => {
    const logger = createLogger();
    const result = logger.getRecords();
    expect(result).toEqual([]);
});


it('should get empty array', () => {
    const logger = createLogger();
    logger.warn('Be careful!');
    logger.error('We have got an error here');
    const result = logger.getRecords('log');
    expect(result).toEqual([]);
});
