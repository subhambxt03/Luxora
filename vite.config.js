import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  server: {
    historyApiFallback: true,   
  },
  preview: {
    historyApiFallback: true,   
  },
};