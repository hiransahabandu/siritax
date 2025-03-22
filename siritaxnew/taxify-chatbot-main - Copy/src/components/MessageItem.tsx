
import React, { useState } from 'react';
import { Edit2, Check, X, CornerDownLeft } from 'lucide-react';

export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface MessageItemProps {
  message: Message;
  onEdit?: (id: string, newText: string) => void;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(message.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(message.text);
  };

  const handleSave = () => {
    if (onEdit && editText.trim() !== '') {
      onEdit(message.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(message.text);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-up`}>
      <div className={`max-w-[80%] ${message.isUser ? 'message-user' : 'message-bot'}`}>
        {isEditing ? (
          <div className="flex flex-col space-y-2">
            <textarea
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="p-2 w-full rounded bg-white bg-opacity-10 text-white placeholder-white placeholder-opacity-70 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              rows={2}
              autoFocus
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCancel}
                className="p-1 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white transition-all"
              >
                <X size={16} />
              </button>
              <button
                onClick={handleSave}
                className="p-1 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white transition-all"
              >
                <Check size={16} />
              </button>
            </div>
          </div>
        ) : (
          <div className="relative group">
            <div className="whitespace-pre-wrap break-words">
              {message.text}
            </div>
            <div className="text-xs opacity-70 mt-1 flex justify-between items-center">
              <span>{formatTime(message.timestamp)}</span>
              {message.isUser && onEdit && (
                <button
                  onClick={handleEdit}
                  className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-white hover:bg-opacity-10"
                >
                  <Edit2 size={12} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageItem;
