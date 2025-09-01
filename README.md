# AI Page

现代化的AI服务网页界面，为用户提供直观易用的AI模型交互体验。

## ✨ 功能特性

- **现代化UI/UX**: 采用现代网页技术构建的清爽响应式设计
- **实时更新**: AI处理任务的实时状态更新
- **多模型支持**: 支持各种AI模型和服务
- **文件上传**: 支持拖拽文件上传，带进度跟踪
- **结果可视化**: 丰富的AI处理结果展示
- **主题切换**: 支持暗色/亮色主题切换
- **移动端友好**: 完全响应式设计

## 🛠️ 技术栈

- **前端框架**: React/Vue.js/Next.js （根据实际框架调整）
- **样式**: Tailwind CSS / Styled Components
- **状态管理**: Redux/Zustand/Context API
- **HTTP客户端**: Axios/Fetch API
- **构建工具**: Vite/Webpack
- **测试框架**: Jest + React Testing Library

## 📋 环境要求

- Node.js (v18 或更高版本)
- npm 或 yarn
- 现代网页浏览器

## 🚀 快速开始

```bash
# 克隆仓库
git clone https://github.com/[用户名]/ai-page.git

# 进入项目目录
cd ai-page

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

应用将在 `http://localhost:3000` 启动

## ⚙️ 环境配置

在根目录创建 `.env.local` 文件：

```env
# API配置
REACT_APP_API_BASE_URL=http://localhost:3001
REACT_APP_WS_URL=ws://localhost:3001

# 功能开关
REACT_APP_ENABLE_DARK_MODE=true
REACT_APP_ENABLE_FILE_UPLOAD=true

# 分析工具（可选）
REACT_APP_GA_TRACKING_ID=your_ga_id
```

## 🎯 使用指南

### 基本操作

1. **上传内容**: 拖拽文件或粘贴文本
2. **选择AI模型**: 从可用模型中选择
3. **配置选项**: 设置处理参数
4. **提交任务**: 点击处理开始AI分析
5. **查看结果**: 实时更新和最终结果

### 高级功能

- **批量处理**: 一次上传多个文件
- **自定义提示**: 创建并保存自定义AI提示
- **历史记录**: 查看和管理处理历史
- **导出结果**: 下载多种格式的结果

## 🏗️ 项目结构

```
ai-page/
├── src/
│   ├── components/      # 可复用UI组件
│   │   ├── common/      # 通用组件
│   │   ├── forms/       # 表单组件
│   │   └── layout/      # 布局组件
│   ├── pages/           # 页面组件
│   ├── hooks/           # 自定义React Hooks
│   ├── services/        # API服务
│   ├── store/           # 状态管理
│   ├── utils/           # 工具函数
│   ├── types/           # TypeScript类型
│   └── styles/          # 全局样式
├── public/              # 静态资源
├── tests/               # 测试文件
└── docs/                # 文档
```

## 🎨 核心组件

### 主要组件

- **FileUploader**: 拖拽文件上传组件
- **ModelSelector**: AI模型选择界面
- **ProgressBar**: 实时进度跟踪
- **ResultViewer**: 展示处理结果
- **HistoryPanel**: 任务历史管理

### 使用示例

```jsx
import { FileUploader, ModelSelector } from '@/components';

function AIProcessingPage() {
  return (
    <div className="ai-page">
      <FileUploader onUpload={handleUpload} />
      <ModelSelector onSelect={handleModelSelect} />
      {/* 其他组件 */}
    </div>
  );
}
```

## 🧪 测试

```bash
# 运行所有测试
npm test

# 监听模式运行测试
npm run test:watch

# 运行测试并生成覆盖率报告
npm run test:coverage

# 运行端到端测试
npm run test:e2e
```

## 🚀 部署

### 构建生产版本

```bash
npm run build
```

### 部署到Vercel/Netlify

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod
```

### Docker部署

```bash
# 构建镜像
docker build -t ai-page .

# 运行容器
docker run -p 3000:3000 ai-page
```

## 🔧 配置选项

### 主题自定义

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-primary-color',
        secondary: '#your-secondary-color',
      }
    }
  }
}
```

### API集成

```javascript
// src/config/api.js
export const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 30000,
  retries: 3
};
```

## 📱 移动端支持

应用完全响应式，优化支持：
- iOS Safari
- Android Chrome
- Mobile Firefox
- 渐进式网页应用 (PWA) 功能

## 🤝 贡献指南

1. Fork 仓库
2. 创建功能分支: `git checkout -b feature/new-feature`
3. 进行更改并添加测试
4. 确保所有测试通过: `npm test`
5. 提交更改: `git commit -m '添加新功能'`
6. 推送到分支: `git push origin feature/new-feature`
7. 提交Pull Request

### 开发规范

- 遵循现有代码风格
- 为新功能添加测试
- 根据需要更新文档
- 使用有意义的提交信息

## 📄 许可证

此项目基于 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🛠️ 故障排除

### 常见问题

**构建错误**: 确保所有依赖已安装且环境变量设置正确。

**API连接问题**: 检查AI Worker服务是否正在运行且可访问。

**性能问题**: 考虑为大型应用实现代码分割和懒加载。

## 🔗 相关项目

- [AI Worker](https://github.com/[用户名]/ai-worker) - 后端AI处理服务
- [Code Review Mastra App](https://github.com/[用户名]/code_review_mastra_app) - 代码审查自动化

---

用 💙 构建无缝AI交互体验
