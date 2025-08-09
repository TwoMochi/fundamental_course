import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Card } from '@/shared/ui/Card/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (startCount: number) => void;
    onAccept?: (startsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;
    const { t } = useTranslation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStarts = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback,
        onAccept]);

    const acceptHendle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHendle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount);
    }, [onAccept, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    );

    return (
        <Card
            className={className}
            max
            data-testid="RatingCard"
        >
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarRating
                    selectedStars={starsCount}
                    size={40}
                    onSelect={onSelectStarts}
                />
            </VStack>
            <Modal
                isOpen={isModalOpen}
                lazy
            >
                <BrowserView>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack
                            max
                            gap="16"
                            justify="end"
                        >
                            <Button
                                data-testid="RatingCard.Close"
                                onClick={cancelHendle}
                                theme={ButtonTheme.OUTLINE_RED}
                            >
                                {t('Закрыть')}
                            </Button>
                            <Button
                                data-testid="RatingCard.Send"
                                onClick={acceptHendle}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>
                </BrowserView>
                <MobileView>
                    <Drawer isOpen={isModalOpen} lazy onClose={cancelHendle}>
                        <VStack
                            max
                            gap="32"
                        >
                            {modalContent}
                            <Button
                                fullWidth
                                onClick={acceptHendle}
                            >
                                {t('Отправить')}
                            </Button>
                        </VStack>
                    </Drawer>
                </MobileView>
            </Modal>
        </Card>
    );
});
