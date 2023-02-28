import { CookBook, CookBooks } from '@/src/type/CookBookType';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function CookBookHookForm({ cookbook }: { cookbook: CookBook }) {
  const {
    register,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    control,
    reset,
  } = useForm<CookBook>({});

  useEffect(() => {
    reset({
      title: cookbook.title ?? null,
      url: cookbook.url ?? null,
      cookitem: cookbook.cookitem ?? [],
      memo: cookbook.memo ?? null,
    });
  }, []);
  return {
    register,
    getValues,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    control,
    reset,
  };
}
