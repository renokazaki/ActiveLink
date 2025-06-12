import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from '../../../_components/shadcn_ui/button';
import React from 'react';
// テスト用のセットアップ
const setup = (props = {}) => {
  const user = userEvent.setup();
  const utils = render(<Button {...props}>テストボタン</Button>);
  const button = screen.getByRole('button', { name: /テストボタン/i });
  return {
    button,
    user,
    ...utils,
  };
};

describe('Button', () => {
  it('ボタンが正しくレンダリングされること', () => {
    const { button } = setup();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('テストボタン');
  });

  it('クリックイベントが正しく発火すること', async () => {
    const handleClick = vi.fn();
    const { button, user } = setup({ onClick: handleClick });
    
    await user.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('異なるバリアントが正しく適用されること', () => {
    const { button } = setup({ variant: 'destructive' });
    
    expect(button).toHaveClass('bg-destructive');
  });

  it('異なるサイズが正しく適用されること', () => {
    const { button } = setup({ size: 'sm' });
    
    expect(button).toHaveClass('h-8');
  });

  it('無効状態が正しく適用されること', () => {
    const { button } = setup({ disabled: true });
    
    expect(button).toBeDisabled();
  });

  it('カスタムクラス名が正しく適用されること', () => {
    const { button } = setup({ className: 'custom-class' });
    
    expect(button).toHaveClass('custom-class');
  });
});
