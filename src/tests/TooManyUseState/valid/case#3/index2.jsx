import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

interface Pessoa {
    nome: string;
    idade: number;
}

const MeuComponente: React.FC = () => {
    const [dobro, setDobro] = useState<number>(() => 2 * 5);
    const [triplo, setTriplo] = useState<number>(() => 3 * 5);
    const [estaVisivel, setEstaVisivel] = useState<boolean>(true);
    const [pessoas, setPessoas] = useState<Pessoa[]>([
        { nome: 'João', idade: 25 },
        { nome: 'Maria', idade: 30 },
    ]);
    const [usuario, setUsuario] = useState<{ nome: string; email: string }>({
        nome: 'Usuário',
        email: 'usuario@email.com',
    });
    const [funcaoPersonalizada, setFuncaoPersonalizada] = useState<() => void>(() => {
        return () => {
            console.log('Executando função personalizada.');
        };
    });

    const [corFundo, setCorFundo] = useState<string>('lightblue');
    const [contador, setContador] = useState<number>(0);
    const [novaPessoa, setNovaPessoa] = useState<Pessoa>({ nome: '', idade: 0 });

    const alterarCorFundo = () => {
        setCorFundo(corFundo === 'lightblue' ? 'lightgreen' : 'lightblue');
    };

    const incrementarContador = () => {
        setContador((prevContador) => prevContador + 1);
    };

    const adicionarNovaPessoa = () => {
        setPessoas([...pessoas, novaPessoa]);
        setNovaPessoa({ nome: '', idade: 0 });
    };


    return (
        <View style={{ backgroundColor: corFundo, padding: 20 }}>
            <Text>Dobro: {dobro}</Text>
            <Button
                title="Dobrar"
                onPress={() => setDobro((prevDobro) => prevDobro * 2)}
            />

            <Text>Visibilidade: {estaVisivel ? 'Visível' : 'Invisível'}</Text>
            <Button
                title="Alternar Visibilidade"
                onPress={() => setEstaVisivel((prevEstaVisivel) => !prevEstaVisivel)}
            />

            <Text>Pessoas: {JSON.stringify(pessoas)}</Text>
            <Button
                title="Adicionar Pessoa"
                onPress={adicionarNovaPessoa}
            />

            <Text>Usuário: {JSON.stringify(usuario)}</Text>
            <Button
                title="Atualizar Idade"
                onPress={() => setUsuario((prevUsuario) => ({ ...prevUsuario, idade: 25 }))}
            />

            <Button
                title="Executar Função Personalizada"
                onPress={funcaoPersonalizada}
            />

            <View style={{ marginTop: 20 }}>
                <Text>Cor de Fundo: {corFundo}</Text>
                <Button
                    title="Alterar Cor de Fundo"
                    onPress={alterarCorFundo}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <Text>Contador: {contador}</Text>
                <Button
                    title="Incrementar Contador"
                    onPress={incrementarContador}
                />
            </View>

            <View style={{ marginTop: 20 }}>
                <TextInput
                    placeholder="Nome"
                    value={novaPessoa.nome}
                    onChangeText={(text) => setNovaPessoa((prevNovaPessoa) => ({ ...prevNovaPessoa, nome: text }))}
                />
                <TextInput
                    placeholder="Idade"
                    value={novaPessoa.idade.toString()}
                    onChangeText={(text) => setNovaPessoa((prevNovaPessoa) => ({ ...prevNovaPessoa, idade: parseInt(text) || 0 }))}
                    keyboardType="numeric"
                />
                <Button
                    title="Adicionar Nova Pessoa"
                    onPress={adicionarNovaPessoa}
                />
            </View>
        </View>
    );
};

export default MeuComponente;
