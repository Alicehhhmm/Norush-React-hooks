/**
 * 环境变量类型
 */
const isDev =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

export default isDev;
