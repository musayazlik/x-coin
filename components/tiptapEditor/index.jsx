import React, {useState} from 'react';
import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';


const TiptapEditor = () => {
  const [content, setContent] = useState('<p>Hello, Tiptap in React!</p>');
  const editor = useEditor({
    content,
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Link,
      Embed.configure({
        autoEmbed: true, // Otomatik gömme etkinleştirme
      }),
      Image,
    ],
    onUpdate({editor}) {
      setContent(editor.getHTML());
    },
  });

  return (
    <div>
      <button
        onClick={() => {
          // Özel bir işlemle iframe eklemek
          editor.chain().focus().insertImage({
            src: 'https://example.com/image.jpg',
            alt: 'Image Alt Text',
          }).run();
        }}
      >
        Resim Ekle
      </button>

      <button
        onClick={() => {
          // Özel bir işlemle iframe eklemek
          editor.chain().focus().insertIframe({
            src: 'https://www.youtube.com/embed/VIDEO_ID',
          }).run();
        }}
      >
        Iframe Ekle
      </button>

      <EditorContent editor={editor}/>
    </div>
  );
}

export default TiptapEditor;
