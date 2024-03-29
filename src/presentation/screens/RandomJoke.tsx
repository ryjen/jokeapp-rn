import type {RandomJokeScreenProps} from '@presentation/types'
import React, {useEffect} from 'react'
import {Center, Text, VStack, Spinner, ScrollView} from 'native-base'
import {useTranslation} from 'react-i18next'
import {useCradle} from '@jishida/react-awilix'
import {AppLayout} from '@presentation/components'

export const RandomJoke = ({navigation}: RandomJokeScreenProps) => {
  const {t} = useTranslation()
  const {jokeRepository} = useCradle()
  const {data, isError, isLoading, refetch} = jokeRepository.getRandomJoke()
  const INITIAL_DELAY = 20000
  const INTERVAL_DELAY = 20000

  useEffect(
    () =>
      navigation.addListener('tabPress', () => {
        refetch()
      }),
    [navigation, refetch],
  )

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    setTimeout(() => {
      interval = setInterval(() => {
        refetch()
      }, INTERVAL_DELAY)
    }, INITIAL_DELAY - INTERVAL_DELAY)
    return () => clearInterval(interval)
  }, [refetch])

  return (
    <AppLayout>
      <Center flex={1}>
        {isLoading ? (
          <VStack>
            <Spinner />
          </VStack>
        ) : isError ? (
          <VStack>
            <Text fontSize="md">{t('Could not load random joke.')}</Text>
          </VStack>
        ) : (
          <ScrollView p="10">
            <Text fontSize="4xl">{data?.joke}</Text>
          </ScrollView>
        )}
      </Center>
    </AppLayout>
  )
}
