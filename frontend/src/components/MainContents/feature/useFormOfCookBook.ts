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
      title: cookbook.title ?? '',
      url: cookbook.url ?? '',
      cookitem: cookbook.cookitem ?? [],
      memo: cookbook.memo ?? '',
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
