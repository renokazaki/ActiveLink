"use client"
import { Button } from '@/_components/shadcn_ui/button';
import { deleteFriend } from './function';
import { useState } from 'react';

const DeleteButton = ({
  friendClerkId,
  myClerkId,
}: {
  friendClerkId: string;
  myClerkId: string;
}) => {
const [isDeleting, setIsDeleting] = useState(false);

  return (
    <div className="ml-2">
      <Button
        onClick={async () => {
          setIsDeleting(true);
          await deleteFriend(myClerkId, friendClerkId);
          setIsDeleting(false);
        }}
        type="button"
        variant="destructive"
        size="sm"
        disabled={isDeleting}
        className="cursor-pointer"
      >
        {isDeleting ? '削除中...' : '削除'}
      </Button>
    </div>
  );
};

export default DeleteButton;
